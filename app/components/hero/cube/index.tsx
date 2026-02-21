import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ExplodingCube() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, inside: false });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xe8735a, transparent: true, opacity: 0.6 });
    const vertexMaterial = new THREE.MeshBasicMaterial({ color: 0xe8735a });
    const faceMaterial = new THREE.MeshBasicMaterial({ color: 0xe8735a, transparent: true, opacity: 0, side: THREE.DoubleSide });
    const glowMaterial = new THREE.MeshBasicMaterial({ color: 0xe8735a, transparent: true, opacity: 0 });

    const faceSize = 1;
    const faceData = [
      { dir: new THREE.Vector3(0, 0, -1), rot: [0, 0, 0] },
      { dir: new THREE.Vector3(0, 0, 1), rot: [0, Math.PI, 0] },
      { dir: new THREE.Vector3(0, -1, 0), rot: [Math.PI / 2, 0, 0] },
      { dir: new THREE.Vector3(0, 1, 0), rot: [-Math.PI / 2, 0, 0] },
      { dir: new THREE.Vector3(-1, 0, 0), rot: [0, Math.PI / 2, 0] },
      { dir: new THREE.Vector3(1, 0, 0), rot: [0, -Math.PI / 2, 0] },
    ];

    const cubeGroup = new THREE.Group();
    const faceGroups: { group: THREE.Group; dir: THREE.Vector3 }[] = [];

    faceData.forEach(({ dir, rot }) => {
      const group = new THREE.Group();
      const edgeGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-faceSize, -faceSize, -faceSize),
        new THREE.Vector3(faceSize, -faceSize, -faceSize),
        new THREE.Vector3(faceSize, faceSize, -faceSize),
        new THREE.Vector3(-faceSize, faceSize, -faceSize),
        new THREE.Vector3(-faceSize, -faceSize, -faceSize),
      ]);
      const edges = new THREE.Line(edgeGeo, edgeMaterial.clone());
      edges.rotation.set(rot[0], rot[1], rot[2]);
      edges.position.copy(dir.clone().multiplyScalar(faceSize));
      group.add(edges);

      const corners = [
        [-faceSize, -faceSize],
        [faceSize, -faceSize],
        [faceSize, faceSize],
        [-faceSize, faceSize],
      ];
      const sphereGeo = new THREE.SphereGeometry(0.06, 8, 8);
      corners.forEach(([cx, cy]) => {
        const dot = new THREE.Mesh(sphereGeo, vertexMaterial.clone());
        const pos = new THREE.Vector3(cx, cy, -faceSize);
        pos.applyEuler(new THREE.Euler(rot[0], rot[1], rot[2]));
        pos.add(dir.clone().multiplyScalar(faceSize));
        dot.position.copy(pos);
        group.add(dot);
      });

      const planeGeo = new THREE.PlaneGeometry(faceSize * 2, faceSize * 2);
      const plane = new THREE.Mesh(planeGeo, faceMaterial.clone());
      plane.rotation.set(rot[0], rot[1], rot[2]);
      plane.position.copy(dir.clone().multiplyScalar(faceSize));
      group.add(plane);

      cubeGroup.add(group);
      faceGroups.push({ group, dir });
    });

    scene.add(cubeGroup);

    const debrisParticles: { mesh: THREE.Mesh; dir: THREE.Vector3; offset: THREE.Vector3; speed: number }[] = [];
    const debrisGeo = new THREE.SphereGeometry(0.04, 6, 6);

    faceData.forEach(({ dir }) => {
      for (let i = 0; i < 5; i++) {
        const mesh = new THREE.Mesh(debrisGeo, new THREE.MeshBasicMaterial({ color: 0xe8735a, transparent: true, opacity: 0 }));
        mesh.position.set(0, 0, 0);
        scene.add(mesh);
        debrisParticles.push({
          mesh,
          dir: dir.clone(),
          offset: new THREE.Vector3((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8),
          speed: 0.8 + Math.random() * 0.8,
        });
      }
    });

    const glowGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const glowSphere = new THREE.Mesh(glowGeo, glowMaterial);
    scene.add(glowSphere);

    const ambientParticles: THREE.Mesh[] = [];
    const ambGeo = new THREE.SphereGeometry(0.025, 6, 6);
    for (let i = 0; i < 8; i++) {
      const mesh = new THREE.Mesh(ambGeo, new THREE.MeshBasicMaterial({ color: 0xe8735a, transparent: true, opacity: 0.08 }));
      scene.add(mesh);
      ambientParticles.push(mesh);
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
        inside: true,
      };
    };
    const handleLeave = () => {
      mouseRef.current = { ...mouseRef.current, inside: false };
    };
    container.addEventListener('mousemove', handleMouse);
    container.addEventListener('mouseleave', handleLeave);

    let explodeProgress = 0;
    let currentRotX = 0,
      currentRotY = 0;
    let clock = 0;

    const animate = () => {
      clock += 0.006;

      const target = mouseRef.current.inside ? 1 : 0;
      explodeProgress += (target - explodeProgress) * 0.04;

      const targetRX = mouseRef.current.inside ? (mouseRef.current.y - 0.5) * 0.8 : 0;
      const targetRY = mouseRef.current.inside ? (mouseRef.current.x - 0.5) * 0.8 : 0;
      currentRotX += (targetRX - currentRotX) * 0.06;
      currentRotY += (targetRY - currentRotY) * 0.06;

      cubeGroup.rotation.x = clock * 0.5 + currentRotX;
      cubeGroup.rotation.y = clock + currentRotY;

      const explodeDist = explodeProgress * 0.6;
      faceGroups.forEach(({ group, dir }) => {
        group.position.copy(dir.clone().multiplyScalar(explodeDist));

        group.children.forEach((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh && child.geometry instanceof THREE.PlaneGeometry) {
            (child.material as THREE.MeshBasicMaterial).opacity = explodeProgress * 0.08;
          }
        });
      });

      debrisParticles.forEach((d) => {
        const t = explodeProgress;
        const pos = d.dir
          .clone()
          .multiplyScalar(t * d.speed * 0.6)
          .add(d.offset.clone().multiplyScalar(t));

        pos.applyEuler(cubeGroup.rotation);
        d.mesh.position.copy(pos);
        (d.mesh.material as THREE.MeshBasicMaterial).opacity = t * 0.5;
        d.mesh.scale.setScalar(t * 1.5);
      });

      glowSphere.scale.setScalar(explodeProgress * 1.2);
      glowMaterial.opacity = explodeProgress * 0.12;

      ambientParticles.forEach((mesh, i) => {
        const t = clock * 2.5 + i * 0.785;
        const orbit = 2.2 + Math.sin(t * 0.4 + i) * 0.2;
        mesh.position.set(Math.cos(t) * orbit, Math.sin(t * 0.6) * (orbit * 0.6), Math.sin(t * 0.3) * 0.5);
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('mousemove', handleMouse);
      container.removeEventListener('mouseleave', handleLeave);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className='hidden h-[400px] w-[400px] cursor-none md:block' />;
}

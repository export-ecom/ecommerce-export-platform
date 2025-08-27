import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import "./DynamicMap.css";

// Import textures
import earthDay from "../../assets/earth_daymap.jpg";
import earthBump from "../../assets/bump.jpg";

function Globe({ isUserInteracting }) {
  const globeRef = useRef();
  const [colorMap, bumpMap] = useLoader(TextureLoader, [earthDay, earthBump]);

  // Auto-rotate the globe when the user is not interacting
  useFrame(() => {
    if (globeRef.current && !isUserInteracting.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={globeRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        specular={"#555"}
        shininess={25}
      />
    </mesh>
  );
}

export default function DynamicMap() {
  const isUserInteracting = useRef(false);

  return (
    <section className="dynamic-map-section">
      <h2 className="dynamic-map-header">🌍 Explore Our Global Reach</h2>

      <div className="dynamic-map-wrapper">
        {/* Globe Section */}
        <div className="globe-container">
          <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            style={{ width: "100%", height: "400px" }}
          >
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, -5, -5]} intensity={0.8} />

            <Suspense fallback={null}>
              <Globe isUserInteracting={isUserInteracting} />
            </Suspense>

            {/* Orbit Controls */}
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              enableRotate={true}
              minDistance={5}
              maxDistance={8}
              rotateSpeed={0.6}
              enableDamping={true}
              dampingFactor={0.05}
              onStart={() => (isUserInteracting.current = true)}
              onEnd={() => {
                // Resume auto-rotation after 2s of inactivity
                setTimeout(() => {
                  isUserInteracting.current = false;
                }, 2000);
              }}
            />

            {/* Stars Background */}
            <Stars
              radius={150}
              depth={60}
              count={6000}
              factor={4}
              saturation={0}
              fade
            />
          </Canvas>
        </div>

        {/* Info Card Section */}
        <div className="info-card">
          <h3>🌐 Exported To</h3>
          <p>We proudly export to <b>25+ countries worldwide</b></p>
          <ul>
            <li>🇺🇸 USA</li>
            <li>🇬🇧 UK</li>
            <li>🇦🇺 Australia</li>
            <li>🇦🇪 UAE</li>
            <li>🇸🇬 Singapore</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

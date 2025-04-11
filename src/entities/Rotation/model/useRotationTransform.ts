'use client';

import { useEffect, useState } from 'react';

export const useRotationTransform = () => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    useEffect(() => {
        const onDeviceOrientationListener = (event: DeviceOrientationEvent) => {
            const tilt = 25;
            const degree = 20;

            const beta = event.beta ?? 45;
            const gamma = event.gamma ?? 45;

            const factorBeta = Math.min(Math.max(beta - 45, -tilt), tilt) / tilt;
            const factorGamma = Math.min(Math.max(gamma, -tilt), tilt) / tilt;

            setRotationX(-1 * degree * factorBeta);
            setRotationY(degree * factorGamma);
        };

        const onMouseMoveListener = (event: MouseEvent) => {
            const degree = 20;

            const factorX = (event.x - window.innerWidth / 2) / (window.innerWidth / 2);
            const factorY = (event.y - window.innerHeight / 2) / (window.innerHeight / 2);

            setRotationX(-1 * degree * factorY);
            setRotationY(degree * factorX);
        };

        window.addEventListener('deviceorientation', onDeviceOrientationListener);
        window.addEventListener('mousemove', onMouseMoveListener);

        return () => {
            window.removeEventListener('deviceorientation', onDeviceOrientationListener);
            window.removeEventListener('mousemove', onMouseMoveListener);
        };
    }, []);

    return `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
};

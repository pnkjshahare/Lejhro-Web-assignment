import { useEffect } from 'react';

const Bootcamp = () => {
    useEffect(() => {
        window.location.href = 'https://www.bootcamp.lejhro.com/';
    }, []);

    return <div>Redirecting to Bootcamp...</div>;
};

export default Bootcamp;
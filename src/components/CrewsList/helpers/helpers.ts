interface IDistance {
    lat1: number;
    lon1: number;
    lat2: number;
    lon2: number;
}

const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
}

export const getDistance = ({ lat1, lon1, lat2, lon2 }: IDistance): number => {
    const R = 6371; // Радиус земли в км
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000; // Расстояние в м
    const distanceRound = Math.round(distance / 100) * 100
    return distanceRound;
}

export const getCurrentTime = (): string => {
    const date = new Date();

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

export const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 1000) + 1;
}

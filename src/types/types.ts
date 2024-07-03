export interface OptionsPlacemark {
    iconColor: string;
}

export interface Crews {
    crew_id: number;
    car_mark: string;
    car_model: string;
    car_color: string;
    car_number: string;
    driver_name: string;
    driver_phone: string;
    lat: number;
    lon: number;
    distance?: number;
}

interface Address {
    address: string;
    lat: number;
    lon: number;
}

export interface OrderRequest {
    source_time: string;
    addresses: Address[];
    crew_id?: number;
}

export interface OrderResponse {
    code: number;
    descr: string;
    order_id: number;
}
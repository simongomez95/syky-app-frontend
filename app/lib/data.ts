'use server';
import {
    EventType, CategoryType, PlanetType
} from './definitions';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function apiGet<T>(url: string, cache: boolean = false): Promise<T> {
    const response = await fetch(`${process.env.BASE_URL}/${url}`, {cache: cache ? 'force-cache' : 'no-store'});
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json() as Promise<T>;
}

export async function apiPost<T>(url: string, data: any): Promise<T> {
    const response = await fetch(`${process.env.BASE_URL}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json() as Promise<T>;
}

export async function createEvent(formData: FormData) {
    const rawFormData = {
        title: formData.get('title'),
        description: formData.get('description'),
        categoryId: formData.get('categoryId'),
        planetId: formData.get('planetId'),
        date: formData.get('date'),
        coordinatesLat: formData.get('coordinatesLat'),
        coordinatesLon: formData.get('coordinatesLon'),
    };
    const response = await apiPost<EventType>('events', rawFormData);
    if(!response) {
        throw new Error('Failed to create event.');
    }
    revalidatePath('/events');
    redirect('/events');
}


export async function fetchEvents(categoryId?: string) {
    try {
        const url = `events${categoryId ? "?categoryId="+categoryId : ''}`;
        return await apiGet<EventType[]>(url);
    } catch (error) {
        throw new Error('Failed to fetch events.');
    }
}

export async function fetchEvent(eventId: string) {
    try {
        return await apiGet<EventType>(`events/${eventId}`);
    } catch (error) {
        throw new Error('Failed to fetch event.');
    }
}

export async function fetchCategories() {
    try {
        return await apiGet<CategoryType[]>('categories');
    } catch (error) {
        throw new Error('Failed to fetch categories.');
    }
}

export async function fetchPlanets() {
    try {
        return await apiGet<PlanetType[]>('planets');
    } catch (error) {
        throw new Error('Failed to fetch planets.');
    }
}
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import {EventType} from '@/app/lib/definitions';
import CategoryFilter from "@/app/ui/events/categoryFilter";
import {fetchCategories} from "@/app/lib/data";
import Link from "next/link";
export default async function EventList({
                                            events,
                                        }: {
    events: EventType[];
}) {
    const categories = await fetchCategories();
    return (
        <div className="flex w-full flex-col md:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Events
            </h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <div className="bg-white px-6">
                    <CategoryFilter categories={categories} />
                </div>

                <div className="bg-white px-6">
                    {events.map((event, i) => {
                        return (
                            <div
                                key={event.uuid}
                                className={clsx(
                                    'flex flex-row items-center justify-between py-4',
                                    {
                                        'border-t': i !== 0,
                                    },
                                )}
                            >
                                <div className="flex items-center">
                                    <div className="min-w-0">
                                        <Link href={`/events/${event.uuid}`}>
                                            <p className="truncate text-sm font-semibold md:text-base">
                                                {event.title}
                                            </p>
                                        </Link>
                                        <p className="hidden text-sm text-gray-500 sm:block">
                                            {event.category.name}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                                >
                                    {event.coordinatesLat}, {event.coordinatesLon}, {event.planet.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center pb-2 pt-6">
                    <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
                </div>
            </div>
        </div>
    );
}

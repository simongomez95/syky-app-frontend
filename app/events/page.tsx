import { Card } from '@/app/ui/dashboard/cards';
import EventList from '@/app/ui/dashboard/event-list';
import { lusitana } from '@/app/ui/fonts';
import {fetchEvents} from "@/app/lib/data";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams?: {
        categoryId?: string;
    };
}) {
    const categoryId = searchParams?.categoryId || '';
    const events = await fetchEvents(categoryId);
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card
                    title="Total Events"
                    value={events.length}
                />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <EventList events={events} />
            </div>
        </main>
    );
}
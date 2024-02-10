import {ClockIcon, GlobeAltIcon, MapIcon, PencilIcon, TagIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import {fetchEvent} from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
    const event = await fetchEvent(params.id);
    console.log(event);
    return (
        <div className="mb-4">
            {/* Event Title */}
            <div className="mb-4">
                <label htmlFor="title" className="mb-2 flex items-start text-sm font-medium">
                        <TagIcon className="pr-0 h-[18px] w-[18px] text-gray-500" />
                        Event title
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        <div>
                            {event.title}
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Description */}
            <div className="mb-4">
                <label htmlFor="title" className="mb-2 flex items-start text-sm font-medium">
                    <PencilIcon className="pr-0 h-[18px] w-[18px] text-gray-500" />
                    Event description
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        <div>
                            {event.description}
                        </div>                    </div>
                </div>
            </div>

            {/* Category */}
            <div className="mb-4">
                <label htmlFor="category" className="mb-2 flex items-start text-sm font-medium">
                    <UserCircleIcon className="pr-0 h-[18px] w-[18px] text-gray-500" />
                    Choose category
                </label>
                <div className="relative">
                    <div>
                        {event.category.name}
                    </div>
                </div>
            </div>

            {/* Planet */}
            <div className="mb-4">
                <label htmlFor="planet" className="mb-2 flex items-start text-sm font-medium">
                    <GlobeAltIcon className="pr-0 h-[18px] w-[18px] text-gray-500" />
                    Choose planet
                </label>
                <div className="relative">
                    <div>
                        {event.planet.name}
                    </div>
                </div>
            </div>



            {/* Event Date */}
            <div className="mb-4">
                <label htmlFor="title" className="mb-2 flex items-start text-sm font-medium">
                    <ClockIcon className="pr-0 h-[18px] w-[18px] text-gray-500" />
                    Event date
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        <div>
                            {event.date}
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Coordinates */}
            <div className="mb-4">
                <label htmlFor="title" className="mb-2 flex items-start text-sm font-medium">
                    <MapIcon className="pr-0 h-[18px] w-[18px] text-gray-500" />
                    Event coordinates
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        {event.coordinatesLat}, {event.coordinatesLon}
                    </div>
                </div>
            </div>

        </div>
    );
}
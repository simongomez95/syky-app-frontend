import {CategoryType, PlanetType} from '@/app/lib/definitions';
import Link from 'next/link';
import {
  ClockIcon, GlobeAltIcon, PencilIcon, TagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import {createEvent} from "@/app/lib/data";

export default function CreateForm({ categories, planets }: { categories: CategoryType[], planets: PlanetType[] }) {
  return (
      <form action={createEvent}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Event Title */}
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Event title
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                    id="title"
                    name="title"
                    type="string"
                    placeholder="Enter title"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          {/* Event Description */}
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Event description
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter description"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="mb-2 block text-sm font-medium">
              Choose category
            </label>
            <div className="relative">
              <select
                  id="category"
                  name="categoryId"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                    <option key={category.uuid} value={category.uuid}>
                      {category.name}
                    </option>
                ))}
              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Planet */}
          <div className="mb-4">
            <label htmlFor="planet" className="mb-2 block text-sm font-medium">
              Choose planet
            </label>
            <div className="relative">
              <select
                  id="planet"
                  name="planetId"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
              >
                <option value="" disabled>
                  Select a planet
                </option>
                {planets.map((planet) => (
                    <option key={planet.uuid} value={planet.uuid}>
                      {planet.name}
                    </option>
                ))}
              </select>
              <GlobeAltIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>



          {/* Event Date */}
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Event date
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                    id="date"
                    name="date"
                    type="date"
                    placeholder="Enter date"
                    className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          {/* Event Coordinates */}
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Event coordinates
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <div>
                  <input
                      id="coordinatesLat"
                      name="coordinatesLat"
                      type="number"
                      placeholder="Latitude"
                      className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <input
                      id="coordinatesLon"
                      name="coordinatesLon"
                      type="number"
                      placeholder="Longitude"
                      className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
              href="/events"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create Event</Button>
        </div>
      </form>
  );
}

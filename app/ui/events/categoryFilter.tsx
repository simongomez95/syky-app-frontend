'use client';
import {usePathname, useSearchParams} from 'next/navigation';
import {useRouter} from "next/navigation";
import {CategoryType} from "@/app/lib/definitions";

export default function CategoryFilter({ categories }: { categories: CategoryType[] }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleChange(uuid: string) {
        const params = new URLSearchParams(searchParams);
        if (uuid) {
            params.set('categoryId', uuid);
        } else {
            params.delete('categoryId');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <select name={"categoryFilter"} id={"categoryFilter"}   defaultValue={searchParams.get('category')?.toString()}
                    onChange={(e) => handleChange(e.target.value)}>
                <option value={''}>All Categories</option>
                {
                    categories.map((category) => {
                        return (
                            <option key={category.uuid} value={category.uuid}>{category.name}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}

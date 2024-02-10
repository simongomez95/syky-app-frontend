import CreateForm from "@/app/ui/events/create-form";
import {fetchCategories, fetchPlanets} from "@/app/lib/data";

export default async function Page() {
    const categories = await fetchCategories();
    const planets = await fetchPlanets();
    return <CreateForm categories={categories} planets={planets}/>;
}
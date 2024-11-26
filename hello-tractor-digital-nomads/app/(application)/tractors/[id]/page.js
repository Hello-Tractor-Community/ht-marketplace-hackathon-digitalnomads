import Header from "@/components/organisms/navbar";
import TractorDisplayCard from "@/components/organisms/tractor-display-card";
import Image from "next/image";
import TractorDetailsPage from "@/components/pages/tractor-details";

export default async function TractorDetails({ params }) {
    const products = await fetch(`${process.env.URL}/api/tractor/${params.id}`);
    const {
        id,
        make = 'Farmatic Epc 5 Pro',
        model,
        price = '10000000',
        engine_power = 60,
        hours_used,
        fuel_type = 'Diesel',
        year_of_manufacturing,
        image_url,
        relatedTractors

    } = await products.json()

    return (
        <TractorDetailsPage />
    )
}

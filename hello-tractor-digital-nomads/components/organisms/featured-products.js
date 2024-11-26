import TractorDisplayCard from "./tractor-display-card";
import SparePartDisplayCard from "./spare-part-display-card";

export async function FeaturedTractors({ products }) {
    const { tractors, spareParts } = products;
    return (
        <>
            <div className="mx-auto mt-10 w-11/12 flex flex-col items-center justify-center gap-4">
                <p className="font-manrope font-bold text-3xl my-6">Featured Products</p>
                <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5">
                    {tractors.map((tractor) => (
                        <TractorDisplayCard
                            key={tractor.tractor_id}
                            id={tractor.tractor_id}
                            make={tractor.make}
                            model={tractor.model}
                            price={tractor.price}
                            hours_used={tractor.hours_used}
                            year_of_manufacturing={tractor.year_of_manufacturing}
                            engine_power={tractor.engine_power}
                            fuel_type={tractor.fuel_type}
                            image_url={tractor.image_url}
                            quantity={tractor.quantity}
                        />
                    ))}
                </div>

                <p className="font-manrope font-bold text-3xl my-6">Featured Spare Parts</p>
                <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5">
                    {spareParts.map((sparePart) => (
                        <SparePartDisplayCard
                            id={sparePart.spare_part_id}
                            key={sparePart.spare_part_id}
                            brand_name={sparePart.brand_name}
                            model={sparePart.model}
                            price={sparePart.price}
                            image_url={sparePart.image_url}
                            quantity={sparePart.quantity}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
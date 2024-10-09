import dynamic from "next/dynamic";
import Link from "next/link";

const SelectCategory = dynamic(() =>
  import("@/app/forum/components/selectcategory")
);
const CardDiskusi = dynamic(() => import("@/app/forum/components/carddiskusi"));

const Forum = () => {
  return (
    <main className="w-full  px-10 py-10">
      <SelectCategory />
      <CardDiskusi />
    </main>
  );
};
export default Forum;

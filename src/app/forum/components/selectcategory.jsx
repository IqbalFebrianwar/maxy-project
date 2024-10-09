const Select = () => {
  return (
    <select className="select  w-full max-w-xs bg-gray-200 text-gray-700">
      <option disabled selected>
        Terbaru
      </option>
      <option>Kemarin</option>
      <option>Bulan lalu</option>
    </select>
  );
};
export default Select;

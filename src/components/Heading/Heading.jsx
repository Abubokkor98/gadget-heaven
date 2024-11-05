/* eslint-disable react/prop-types */
const Heading = ({ title, p }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10 space-y-3">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-[50%] text-center">{p}</p>
    </div>
  );
};

export default Heading;

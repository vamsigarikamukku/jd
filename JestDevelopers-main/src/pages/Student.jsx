import StudentForm from "../components/StudentForm";
import { studentData } from "../constants";

const Student = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <div className="flex flex-col justify-center items-center border-b border-neutral-700">
        <div className="text-center">
          <span className="bg-neutral-900 text-red-600 rounded-full h-10 text-lg font-medium px-2 py-1 uppercase">
            Our Services
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {studentData.map((data, index) => (
            <div
              key={index}
              className="w-100 bg-neutral rounded-md p-8 border border-neutral-800 flex flex-col items-center"
            >
              <div className="bg-red-100 p-4 text-red-600 rounded-full">
                {data.icon}
              </div>
              <h6 className="mt-2 text-lg md:text-2xl font-medium">
                {data.title}
              </h6>
              <p className="mt-2 md:mt-4 text-sm font-normal italic text-neutral-600 text-center">
                {data.quote}
              </p>
              <p className="mt-2 md:mt-4 font-thin text-center">{data.text}</p>
            </div>
          ))}
        </div>

        <h6 className="mt-6 mb-6 lg:mt-10 text-sm lg:text-lg text-center text-neutral-500 max-w-4xl">
          Please fill out this form to contact us. Our employee will reach you
          shortly!
        </h6>
      </div>

      <StudentForm/>
    </div>
  );
};

export default Student;

import React from 'react';

export const Education = () => {
  const educationData = [
    { degree: 'B.Tech', institute: 'College of Technology And Engineering, Udaipur', cgpaOrPercentage: '-', year: '2025 (expected)' },
    { degree: 'Senior Secondary', institute: 'CBSE Board', cgpaOrPercentage: '86.8%', year: '2021' },
    { degree: 'Secondary', institute: 'CBSE Board', cgpaOrPercentage: '79%', year: '2019' },
  ];

  return (
    <div className=" m-4 md:mx-16 lg:mt-32 mt-28">
      <h1 className="text-3xl md:text-4xl font-extrabold underline">Education</h1>
      <div className="bg-white shadow-md rounded my-16 overflow-hidden overflow-x-auto ">
        <table className="md:min-w-max w-full table-auto ">
          <thead>
            <tr className="bg-gray-600 text-gray-100 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Degree</th>
              <th className="py-3 px-6 text-left">Institute/ board</th>
              <th className="py-3 px-6 text-left">CGPA/ Percentage</th>
              <th className="py-3 px-6 text-left">Year</th>
            </tr>
          </thead>
          <tbody className=" text-sm font-normal">
            {educationData.map((data, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{data.degree}</td>
                <td className="py-3 px-6 text-left">{data.institute}</td>
                <td className="py-3 px-6 text-left">{data.cgpaOrPercentage}</td>
                <td className="py-3 px-6 text-left">{data.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

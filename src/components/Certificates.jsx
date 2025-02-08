import { certificates } from "../constants"


const Certificates = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="my-20 text-center text-4xl">Certificates & Diplomas</h2>
      <div className="mb-8 flex flex-wrap justify-center gap-6">
        {certificates.map((certificate, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-6">
            <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-center">{certificate.name}</h3>
              <p className="text-gray-300 mb-2 text-center">{certificate.institution}</p>
              {certificate.description && (
                <p className="text-gray-400 mb-2 text-center">{certificate.description}</p>
              )}
              <p className="text-gray-400 text-center">{certificate.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
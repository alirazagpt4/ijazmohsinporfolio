const DownloadResume = () => {
    const handleDownload = () => {
    
      const link = document.createElement('a');
      link.href = '/assets/ijazmohsin.pdf'; 
      link.download = 'ijazmohsin.pdf';
      link.click();
    };
  
    return (
      <div className="text-center mt-8">
        <h2 className="text-xl font-semibold mb-4">Download My Resume</h2>
        <button 
          onClick={handleDownload} 
          className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Download Resume
        </button>
      </div>
    );
  };
  
  export default DownloadResume;
  
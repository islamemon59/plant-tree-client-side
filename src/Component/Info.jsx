import React from 'react';

const Info = ({ label, icon, value }) => {
    return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      <span className="font-semibold text-gray-500">{label}:</span> <span className='text-gray-600'>{value}</span>
    </div>
    );
};

export default Info;
import React from 'react';
import { NotFoundProps } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const NotFound: React.FC<NotFoundProps> = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
        
        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t.pageNotFound}
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="space-x-4">
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {t.goHome}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-gray-700">
          <div>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p className="mb-4">
              US AgriTech Database (www.agrieq.farm) is committed to protecting your personal information and privacy. 
              This policy describes how we collect, use, and safeguard the information you provide while using our website.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
            <p className="mb-3">We primarily collect two types of information:</p>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">A. Information You Provide Directly</h4>
                <p className="mb-2">
                  When you submit an inquiry, contact us, or use certain features on this website, you may provide us with the following:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Contact Information:</strong> Your name, email address, and telephone number.</li>
                  <li><strong>Business Information:</strong> Your company name, farm type, or the purpose for which you are using our service.</li>
                  <li><strong>Inquiry Details:</strong> Any questions, requests, or feedback submitted through the "Price Inquiry" or "Contact Us" sections.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">B. Information Collected Automatically (Usage Data)</h4>
                <p className="mb-2">
                  When you visit our website, our servers and third-party analytics tools automatically collect certain information, such as:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Device Information:</strong> Your IP address, browser type, and operating system.</li>
                  <li><strong>Usage Information:</strong> The pages you view, the time of your visit, the duration spent on the site, links clicked, and referring websites.</li>
                  <li><strong>Cookies:</strong> We use Cookies to track website activity to optimize user experience and analyze traffic.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use the Information</h3>
            <p className="mb-2">We use the collected information for the following purposes:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Service Delivery:</strong> To respond to your "Price Inquiry" or "Contact Us" requests and provide you with the technical specifications and information you need.</li>
              <li><strong>Website Improvement:</strong> To analyze website usage to improve our content, database structure, and service features (e.g., "Equipment Comparison").</li>
              <li><strong>Technical Support:</strong> To diagnose and resolve technical issues.</li>
              <li><strong>Communication:</strong> To send you updates and notifications related to your inquiries, account, or our services.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Sharing and Disclosure of Information</h3>
            <p className="mb-2">
              We commit to not selling, renting, or trading your personal information to any third parties. We may disclose information in the following circumstances:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Service Providers:</strong> Sharing with third-party service providers who assist us in operating the website, providing hosting services, or analyzing data. These providers are contractually obligated to keep the information confidential.</li>
              <li><strong>Legal Requirements:</strong> To comply with law, subpoena, or court order, or to protect our rights, property, or safety.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Your Choices</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Cookies:</strong> You can refuse or manage Cookies through your browser settings. However, please note that disabling cookies may affect your ability to use certain features of the website.</li>
              <li><strong>Opt-Out:</strong> If we send you any marketing emails (e.g., notifications about new equipment data), you can always choose to stop receiving them via the unsubscribe link in the email.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Contact Us</h3>
            <p className="mb-2">If you have any questions regarding this Privacy Policy, please contact us at:</p>
            <ul className="list-disc ml-6">
              <li><strong>Email:</strong> mitdream2028@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
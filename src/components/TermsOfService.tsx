import React from 'react';
import { X } from 'lucide-react';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
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
              Welcome to the US AgriTech Database (www.agrieq.farm). Please read these Terms of Service carefully before using this website. 
              Your access to and use of this website signifies your agreement to accept and comply with these terms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Description of Service</h3>
            <p className="mb-4">
              The US AgriTech Database provides professionals with a database of specifications, performance data, and reference information 
              for American agricultural equipment. The content on this site is intended primarily for informational and professional reference purposes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Intellectual Property and Content Ownership</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">A. Website Content</h4>
                <p className="mb-3">
                  All content published on this website, including but not limited to equipment specification data, text, images, software, 
                  source code, designs, and trademarks, is owned by US AgriTech Database or its licensors and is protected by copyright, 
                  trademark, and other intellectual property laws.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">B. Data Usage Restrictions (Core Clause)</h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <strong>Permitted Use:</strong> You are granted a limited, non-exclusive, non-transferable license to access and view 
                    the data in this database for personal or internal corporate equipment research, comparison, and purchasing planning purposes.
                  </li>
                  <li>
                    <strong>Prohibited Use:</strong> You are strictly prohibited from using the data for commercial resale, republication, 
                    mass duplication (e.g., scraping/data mining), the creation of an independent database, or licensing the data to any 
                    third party in any form. Any unauthorized reproduction or distribution constitutes a material breach of these Terms.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Data Accuracy Disclaimer</h3>
            <p className="mb-3">
              While we strive to provide the most comprehensive and accurate technical specifications, we cannot guarantee the absolute 
              accuracy of all data due to potential updates or variations in manufacturer information.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>"As Is" Provision:</strong> All equipment specifications and pricing data on this website are provided "as is."
              </li>
              <li>
                <strong>No Liability:</strong> US AgriTech Database is not responsible for any commercial decisions, investment losses, 
                or purchasing choices you make based on the information provided on this website. You should verify all critical 
                specifications directly with the equipment manufacturer or dealer before making a final purchase.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">4. User Conduct and Prohibited Activities</h3>
            <p className="mb-3">In using this website, you agree not to engage in the following activities:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Interfering with or disrupting the normal operation of the website, servers, or networks.</li>
              <li>Attempting to gain unauthorized access to any part of this website, other user accounts, or any systems connected to this website.</li>
              <li>Using any automated tools (including scrapers or bots) to extract or collect data from this website in a non-standard manner.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Limitation of Liability</h3>
            <p className="mb-3">
              To the maximum extent permitted by applicable law, US AgriTech Database shall not be liable for any direct, indirect, 
              incidental, special, or punitive damages (including but not limited to loss of profits or loss of data) arising from your 
              use of or inability to use this website, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Modifications to the Terms</h3>
            <p className="mb-3">
              We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon being 
              posted on the website. Your continued use of the website after the Terms have been modified will be deemed as your 
              acceptance of the new Terms of Service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Contact Information</h3>
            <p className="mb-2">If you have any questions about these Terms of Service, please contact us at:</p>
            <ul className="list-disc ml-6">
              <li><strong>Email:</strong> mitdream2028@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
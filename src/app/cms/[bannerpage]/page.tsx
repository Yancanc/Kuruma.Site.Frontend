import BannerList from '@/components/CMSComponents/BannerManagementComponents/BannerList';
import PreviewBannerSection from '@/components/CMSComponents/BannerManagementComponents/PreviewBannerSection';
import React from 'react';

const BannerManagement: React.FC = () => {
  return (
    <div className="flex overflow-x-hidden flex-col items-center bg-white">
      <PreviewBannerSection />
      <BannerList />
    </div>
  );
};

export default BannerManagement;
import React from 'react';
import ContainerPrimary from '../../../components/Container';
import DetailDataSection from './DetailDataSection';
import DetailHeader from './DetailHeader';
import DetailThumbsSection from './DetailThumbsSection';

const DetailView = () => {
  return (
    <section className=' mb-5'>
      <div>
        <ContainerPrimary>
          <div>
            <DetailHeader />
            {/* Detail */}
            <div className='row row-cols-1 row-cols-lg-3 gy-4'>
              <DetailThumbsSection
                description={`Round neckline
Slit on the back neck with metallic button closure
Tie knot closure on the front
Full sleeves with elasticized cuffs
Trousers with elasticized waistband
Wide leg
Color: Black
Fabric (Shirt+Trousers): Grip
Model is wearing size "S"`}
              />
              <div>
                <DetailDataSection />
              </div>
            </div>
            {/* /Detail */}
          </div>
        </ContainerPrimary>
      </div>
    </section>
  );
};

export default DetailView;

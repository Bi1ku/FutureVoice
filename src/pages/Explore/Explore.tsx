import { useEffect, useState } from 'react';
import { enhancedFetch } from '../../globals';
import Others from './components/Others.jsx';
import Representatives from './components/Representatives';
import Title from './components/Title';

function Explore() {
  const [representatives, setRepresentatives] = useState<any>();
  const [state, setState] = useState('');
  const [district, setDistrict] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      if (position.coords.latitude && position.coords.longitude) {
        const geoRes = await enhancedFetch(
          'GEO',
          `reverse?q=${position.coords.latitude},${position.coords.longitude}&fields=cd`
        );

        const state = geoRes.results[0].address_components.state;
        const district =
          geoRes.results[0].fields.congressional_districts[0].district_number;

        setState(state);
        setDistrict(district);

        const congressRes = await enhancedFetch(
          'CONGRESS',
          `member/${state}/${district}`
        );

        setRepresentatives(congressRes.members);
      }
    });
  }, [state, district]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='xl:px-44 pt-16 lg:px-32 md:px-24 px-16 relative'>
      <Title state={state} district={district} />
      <Representatives representatives={representatives} />
      <Others />
    </div>
  );
}

export default Explore;

import React, { useState, useEffect } from 'react';

import Details from './Details';

import useApi from 'src/utils/useApi';

const DetailsScreen = ({ navigation }) => {
  const api = useApi();
  const { id } = navigation.state.params;

  const [info, _info] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const { data } = await api.get(`/id/${id}/info`);
    _info(data);
  };

  const goBack = () => navigation.goBack();

  return (
    <Details info={info} goBack={goBack}/>
  );
};

export default DetailsScreen;

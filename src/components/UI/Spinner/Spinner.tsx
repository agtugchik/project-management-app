import React from 'react';
import cl from './Spinner.module.scss';

type Props = {
  typeOfModalView?: string;
};

export default function Spinner(props: Props) {
  const view = props.typeOfModalView;
  return <div className={view ? cl.centerSpinner : cl.loading}>Loading</div>;
}


import { Button } from '../Button';
import { CheckIcon, XIcon } from 'lucide-react';

import style from './style.module.css';

type DialogProps = {
  data: string,
  closeToast: (value: boolean) => void
}

export function Dialog({ closeToast, data }: DialogProps) {
  return (
    <>
      <div className={style.container}>
        <p>{data}</p>

        <div className={style.buttonsContainer}>
          <Button
            onClick={() => closeToast(true)}
            icon={<CheckIcon />}
            aria-label='Confirmar ação'
            title='Confirmar ação'
          />
          <Button
            onClick={() => closeToast(false)}
            icon={<XIcon />}
            color='red'
            aria-label='Cancelar ação'
            title='Cancelar ação'
          />
        </div>
      </div>
    </>
  )
}
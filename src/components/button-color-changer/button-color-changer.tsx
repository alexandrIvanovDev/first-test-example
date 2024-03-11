import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getRandomColor } from 'common/getRandomColor.ts';
import { getRandomText } from 'common/getRandomText.ts';
import { Button } from 'components/button/button.tsx';
import s from './button-color-changer.module.scss';

type Props = {
  textLength?: number
}

export const ButtonColorChanger = ({ textLength = 5 }: Props) => {
  const [background, setBackground] = useState('');
  const [text, setText] = useState('');

  const [_, setCopiedText] = useState('');

  const onChangeData = () => {
    setBackground(getRandomColor());
    setText(getRandomText(textLength));
  };

  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(newText: string) {
    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(newText);
    }
    return document.execCommand('copy', true, newText);
  }

  const handleCopyClick = () => {
    copyTextToClipboard(background)
      .then(() => {
        setIsCopied(true);
        setCopiedText(background);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    if (isCopied) {
      toast('Copied');
    }
  }, [isCopied]);

  useEffect(() => {
    onChangeData();
  }, []);

  return (
    <div className={s.wrapper}>
      <h3 className={s.color} onClick={handleCopyClick} title="Click to copy">
        Color: {background}
      </h3>
      <Button
        onClick={onChangeData}
        style={{ background }}
      >
        {text}
      </Button>
    </div>
  );
};

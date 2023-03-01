import useTranslation from "next-translate/useTranslation";

interface IText {
  children: string;
  className?: string;
}

export const Text = (props: IText) => {
  const { children, className } = props;
  const { t, lang } = useTranslation("common");

  return <p className={className}>{t(children)}</p>;
};

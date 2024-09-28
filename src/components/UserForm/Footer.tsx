interface IFooterProps {
  goBack: (() => Promise<void>) | undefined;
}

function Footer({ goBack }: IFooterProps) {
  return (
    <div className="flex justify-between mt-4">
      <button
        type="button"
        onClick={goBack}
        className="bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded"
      >
        Voltar
      </button>
      <button
        type="submit"
        className="bg-orange-500 text-white py-2 px-4 rounded"
      >
        Continuar
      </button>
    </div>
  );
}

export default Footer;

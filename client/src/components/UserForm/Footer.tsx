interface IFooterProps {
  goBack: (() => Promise<void>) | undefined;
  submitButtonLabel?: string;
}

function Footer({ goBack, submitButtonLabel = "Continuar" }: IFooterProps) {
  return (
    <div className="flex justify-between mt-4 gap-4">
      <button
        type="button"
        onClick={goBack}
        className="w-full h-10 bg-transparent border border-orange-400 text-orange-400 py-2 px-4 rounded"
      >
        Voltar
      </button>
      <button
        type="submit"
        className="w-full h-10 bg-orange-400 text-white py-2 px-4 rounded"
      >
        {submitButtonLabel}
      </button>
    </div>
  );
}

export default Footer;

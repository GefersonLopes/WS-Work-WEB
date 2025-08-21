function ErrorMessage({ error }: { error?: string }) {
  return error && <p className="mt-1 text-sm text-red-600">{error}</p>;
}

export default ErrorMessage;

import clsx from "clsx";
import { Controller } from "react-hook-form";
import Select from "react-select";

import ErrorMessage from "../ErrorMessage";
function CustomSelect({
  name,
  placeholder,
  control,
  modelOpts,
  loadingModels,
  error,
  className,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  modelOpts: { value: string | number; label: string }[];
  loadingModels: boolean;
  placeholder: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={clsx(className)}>
      <label className="block text-sm font-medium mb-1">{name}</label>
      <Controller
        name={`${name}`}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={modelOpts}
            isLoading={loadingModels}
            placeholder={placeholder}
            classNamePrefix="rs"
          />
        )}
      />
      <ErrorMessage error={error} />
    </div>
  );
}

export default CustomSelect;

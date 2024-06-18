import { MultiSelect } from "primereact/multiselect";
import { SelectItemOptionsType } from "primereact/selectitem";

interface PropsSelectMulti<T> {
  getFieldProps: (name: string) => {
    onChange: (e: React.ChangeEvent) => void;
    onBlur: (e: React.FocusEvent) => void;
    value: string;
    name: string;
  };
  name: string;
  onChange: (e: T) => void;
  valueOptions: T;
  optionsLabel: SelectItemOptionsType | undefined;
  titleOption: string;
  className?: string;
  tooltip?: string;
}
const SelectMulti = <T,>({
  getFieldProps,
  onChange,
  optionsLabel,
  titleOption,
  valueOptions,
  tooltip,
  className,
  name,
}: PropsSelectMulti<T>) => {
  return (
    <MultiSelect
      {...getFieldProps(name)}
      value={valueOptions}
      onChange={(e) => onChange(e.value)}
      options={optionsLabel}
      display="chip"
      // este es el name de los valores de losvalores del array
      optionLabel={name}
      // este es el name del array que tendra los valores del multi select
      name="servicios"
      scrollHeight="10%"
      filter
      tooltipOptions={{
        position: "top",
      }}
      filterPlaceholder="Buscar..."
      tooltip={tooltip ? tooltip : "Servicios..."}
      // unstyled
      panelClassName=""
      className={`${className} "w-full border border-border_three/50 border-bg_secondary"`}
      itemClassName="border border-bg_secondary/10 font-robotoSlab_600"
      placeholder={titleOption}
      maxSelectedLabels={3}
    />
  );
};
export default SelectMulti;

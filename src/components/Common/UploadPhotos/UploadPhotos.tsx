import { itemTemplate } from "@/components/Configuracion/PanelConfiguracion/DetallesConfiguracion/FormularioLogo/ItemTemplateLogo";
import { FileUpload, FileUploadSelectEvent } from "primereact/fileupload";

interface UploadPhotosProps {
  onSelect?: (files: FormData | undefined) => void;
  accept?: string;
  maxFileSize?: number;
  chooseLabel?: string;
  name?: string;
  auto?: boolean;
  uploadLabel?: string;
  autoName?: string;
  autoUrl?: string;
}

const UploadPhotos: React.FC<UploadPhotosProps> = ({
  onSelect,
  accept = "image/*",
  maxFileSize = 1000000,
  chooseLabel = "Seleccionar una imagen",
  uploadLabel = "Subir imagen",
  name,
  auto,
  autoName,
  autoUrl,
}) => {
  if (auto)
    return (
      <FileUpload
        style={{
          width: "100%",
          fontFamily: '"Roboto Slab", "serif"',
        }}
        uploadOptions={{
          label: "Subir",
          className: "bg-bg_six text-default w-full p-2",
        }}
        chooseOptions={{
          className: "w-full",
        }}
        cancelOptions={{
          className: "hidden",
        }}
        headerClassName="flex gap-8 border p-2 rounded-lg shadow-md"
        chooseLabel="Seleccione una imagen"
        name={autoName}
        url={autoUrl}
        multiple={false}
        accept="image/*"
        maxFileSize={1000000}
      />
    );

  const upload = (e: FileUploadSelectEvent) => {
    const file = e.files[0]; // Solo se espera un archivo, por lo tanto, tomamos el primer elemento

    const formData = new FormData();
    // puede que falla por estoas condicionales, si falla no queda de otra que ponerlo obligatoria a la hora de enviarlo al backend
    formData.append(name ?? "", file);
    onSelect && onSelect(formData);
  };

  return (
    <div className="flex p-1  justify-center items-center w-full">
      <FileUpload
        style={{
          width: "100%",
          fontFamily: '"Roboto Slab", "serif"',
        }}
        chooseLabel={chooseLabel}
        chooseOptions={{
          className:
            "font-robotoSlab w-full bg-bg_three/50 text-text_primary border shadow-md hover:shadow-none transition hover:bg-bg_three",
        }}
        multiple={false}
        customUpload
        onSelect={upload}
        name={name}
        accept={accept}
        maxFileSize={maxFileSize}
        progressBarTemplate
        uploadLabel={uploadLabel}
        itemTemplate={itemTemplate}
        cancelOptions={{
          className: "hidden",
        }}
        uploadOptions={{
          className: "hidden",
        }}
      />
    </div>
  );
};

export default UploadPhotos;

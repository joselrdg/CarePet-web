import PetsIcon from "@material-ui/icons/Pets";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TodayIcon from '@material-ui/icons/Today';

export const CATEGORIES = [
  { 
    name: "Mascotas", 
    icon: <PetsIcon />, 
    subcategory: [{
      name:'Añadir mascota', 
      folders: ['Tablero', 'Citas', 'Cuidados', 'Medicación', 'Reseña', 'Editar'
    ]}] },
    { 
      name: "Razas Fci", 
      icon: <i className="fas fa-dog"></i>, 
      subcategory: [{ 
        name: 'Añadir aviso', 
        folders: ['Grupos', 'Todas las razas', 'Buscador', ] 
      }] },
  { 
    name: "Agenda", 
    icon: <TodayIcon />, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Plan de salud",
     icon: <LocalHospitalIcon />, 
     subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Recomendaciones", 
    icon: <i className="fas fa-hand-holding-medical"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Nutrición", 
    icon: <i className="fas fa-bone"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Vacunas", 
    icon: <i className="fas fa-syringe"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Desparasitación", 
    icon: <i className="fas fa-bug"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Historial", 
    icon: <i className="fas fa-file-medical"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] }
];

export const DOGBREED = [
  'American english coonhound',
  'Poochon',
  'Labsky o huskador',
  'Cuvac eslovaco',
  'Shepsky',
  'Caniche gigante o poodle estándar',
  'Pastor leonés',
  'Barbet o perro de agua francés',
];

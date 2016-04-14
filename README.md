# ARTI4208-Grupo6 / repos

Repositorio principal para todos los archivos (docs, ejecutables, fuentes, imágenes, eap, artefactos y demás componentes) requeridos dentro del proyecto de la cátedra ARTI4208 - Arquitecturas de Nueva Generación. Los cuales soportan las distintas experimentaciones que se realizan a lo largo del curso. 

## Archivos 

Acá se describe el contenido de los archivos utilizados durante el proyecto en cada una de sus versiones. 

### Carpetas Box

Son las carpetas que almacenan la configuración del ambiente a virtualizar realizado para el proyecto. Cada experimento representa una VM_BOX, dependiendo de lo que se desea verificar. 
_vm_base_ es la primera máquina virtual creada, asociada directamente dentro del contexto de _vagrant_, a la box Ubunt/trusty64. 
_vm_dock_ es la segunda máquina virtual creada, asociada directamente dentro del contexto de _vagrant_, a la box Ubunt/vivid64. En ésta última si instaló en un contendedor de docker una imagen de _mongoDB_. 
_vm_iot_ es la tercera máquina virtual creada, asociada directamente con los temas de IoT y Analítica. La box es Ubunt/trusty64. 


Las carpetas anteriores contienen, además del repositorio, los siguientes archivos: 

**- vagrantfile:** Contiene la configuración Vagrant para automatizar el inicio del ambiente. Se modifica el documento original entregado en los talleres, para que fuese personalizado. 

**- install.sh:** Contiene las instrucciones necesarias para las instalaciones requeridas en la Box.

**- init.sh:** Es opcional. Se deja intacto a como vino el original.

**- keys.sh:** Registra los parámetros de seguridad. Se deja intacto a como vino el original.

**- docker.sh:** Es opcional. Contiene las instrucciones para descargar las imagenes y correr los contenedores al iniciar el ambiente. 

### Carpetas docs

Almacena archivos dosc y fuentes tales como las imagenes tomadas como evidencia de las actividades, que sirven como soporte para la documentación de la wiki. _(Ver la wiki del repositorio)_

### Carpeta datasource

Esta carpeta almacena todo lo que tiene que ver con las fuentes de datos requeridas para nuestro proyecto. Particularmente nuestra tarea fue generar información de mascotas _(pets)_. Por ende, tendremos interna a esta carpeta, una denominada CouchDB, ya que éste ue el sistema que nos relacionaron para el proyecto. A continuación se describe el contenido de los archivos involucrados. 

**- HappyPets_Templates_for_Dogs** Contiene el conjunto de archivos JSON utilizados como templates para generar aleatoriamente los objetos con información de perros. 

**- HappyPets_Templates_for_Gatos** Contiene el conjunto de archivos JSON utilizados como templates para generar aleatoriamente los objetos con información de Gatos.

**- HappyPets_Objects_Dogs:** Contiene el conjunto de archivos JSON con los objetos asociados a mascotas tipo Perros.

**- HappyPets_Objects_Cats:** Contiene el conjunto de archivos JSON con los objetos asociados a mascotas tipo Gatos.







import { useState, useEffect } from 'react';
import { Modal } from 'flowbite-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import "../utils/i18n";

// Função simulada para buscar dados da API
const fetchTimelineData = async () => {
  // Simulação de dados recuperados de uma API
  return [
    {
      id: 1,
      name: "Tabela_teste2",
      user: "Usuário A",
      timestamp: "2023-10-01 10:00:00",
      department: "Departamento X",
      status: "statusPending",
    },
    {
      id: 1,
      name: "Tabela_teste2",
      user: "Usuário A",
      timestamp: "2023-10-02 11:00:00",
      department: "Departamento X",
      status: "statusUpdating",
    },
    {
      id: 1,
      name: "Tabela_teste2",
      user: "Usuário A",
      timestamp: "2023-10-03 12:00:00",
      department: "Departamento X",
      status: "statusApproved",
    },
    {
      id: 1,
      name: "Item 1",
      user: "Usuário A",
      timestamp: "2023-10-04 14:00:00",
      department: "Departamento X",
      status: "statusRejected",
    },
  ];
};

const TimelineModal = ({ isOpen, onClose }) => {
  const [timelineItems, setTimelineItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTimelineData();
      setTimelineItems(data);
    };

    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "statusPending":
        return 'rgb(158, 158, 158)'; // Cinza
      case "statusUpdating":
        return 'rgb(255, 193, 7)'; // Amarelo
      case "statusApproved":
        return 'rgb(76, 175, 80)'; // Verde
      case "statusRejected":
        return 'rgb(244, 67, 54)'; // Vermelho
      default:
        return 'rgb(33, 150, 243)'; // Azul padrão
    }
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Body>
        <div className="p-4" style={{ width: '100%', height: '400px', overflowY: 'auto' }}>
          <VerticalTimeline>
            {timelineItems.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                date={<span className="flex justify-center">{t(item.status)}</span>}
                iconStyle={{ background: getStatusColor(item.status), color: '#fff' }} // Alterar a cor do círculo
                contentStyle={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)' }} // Melhorar a sombra superior do card
              >
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <p>
                  {t('subtitle')}: {item.user}<br />
                  {t('details')}: {item.department}<br />
                  Data e Hora: {item.timestamp}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const TimelinePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        type="button"
        className="px-4 py-2 text-white bg-blue-500 rounded"
        onClick={() => setModalOpen(true)}
      >
        Abrir Modal
      </button>
      <TimelineModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default TimelinePage;
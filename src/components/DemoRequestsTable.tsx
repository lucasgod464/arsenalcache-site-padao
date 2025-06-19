
import React from 'react';
import { AlertCircle } from 'lucide-react';

const DemoRequestsTable = () => {
  return (
    <div className="py-10 text-center">
      <div className="flex flex-col items-center justify-center text-gray-500">
        <AlertCircle className="w-16 h-16 mb-4 text-gray-400" />
        <h2 className="text-2xl font-bold mb-2">Funcionalidade Removida</h2>
        <p className="text-lg font-medium">Tabela de solicitações de demonstração</p>
        <p className="text-sm">Esta funcionalidade foi removida pois não há mais integração com banco de dados.</p>
        <p className="text-sm mt-2">Os dados agora são enviados apenas via webhook.</p>
      </div>
    </div>
  );
};

export default DemoRequestsTable;

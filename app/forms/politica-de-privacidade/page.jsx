export default function Page() {
    return (
      <div className="flex flex-col p-6 w-full max-w-4xl mx-auto ">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white lg:text-5xl">
          Política de Privacidade & Termos de Uso
        </h1>
  
        {/* Seção de Coleta de Dados */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">1. Coleta de Dados</h2>
          <p className="text-zinc-400 mb-4">
            As informações fornecidas neste formulário serão coletadas e armazenadas em um banco de
            dados seguro utilizando o serviço Firebase. Os dados coletados podem incluir, mas não estão
            limitados a:
          </p>
          <ul className="list-inside list-disc text-zinc-400 pl-5">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Telefone</li>
            <li>Outras informações solicitadas no formulário.</li>
          </ul>
        </section>
  
        {/* Seção de Finalidade */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">2. Finalidade do Uso dos Dados</h2>
          <p className="text-zinc-400 mb-4">
            Os dados coletados serão utilizados exclusivamente para os seguintes fins:
          </p>
          <ul className="list-inside list-disc text-zinc-400 pl-5">
            <li>Entrar em contato com o usuário</li>
            <li>Enviar atualizações e informações relevantes</li>
            <li>Garantir uma experiência personalizada e eficiente na interação com nossos serviços.</li>
          </ul>
        </section>
  
        {/* Seção de Armazenamento */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">3. Armazenamento e Segurança</h2>
          <p className="text-zinc-400">
            Os dados serão armazenados em servidores seguros gerenciados pelo Firebase, que seguem
            padrões internacionais de segurança da informação. Adotamos medidas técnicas e
            organizacionais para proteger suas informações contra acessos não autorizados, uso
            indevido, alterações ou destruição.
          </p>
        </section>
  
        {/* Seção de Compartilhamento */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">4. Compartilhamento de Informações</h2>
          <p className="text-zinc-400">
            As informações coletadas <strong>não serão compartilhadas com terceiros</strong> sem o
            consentimento do usuário, exceto quando exigido por lei ou para cumprimento de obrigações
            legais.
          </p>
        </section>
  
        {/* Seção de Direitos */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">
            5. Direito de Acesso, Alteração ou Exclusão
          </h2>
          <p className="text-zinc-400 mb-4">Você tem o direito de:</p>
          <ul className="list-inside list-disc text-zinc-400 pl-5">
            <li>Solicitar o acesso às informações armazenadas.</li>
            <li>Solicitar a correção de dados incorretos.</li>
            <li>Solicitar a exclusão de suas informações do nosso banco de dados.</li>
          </ul>
          <p className="text-zinc-400">
            Para exercer esses direitos, entre em contato conosco pelo e-mail:{" "}
            <a href="mailto:contato@vgapp.com.br" className="text-blue-600 underline">
              contato@vgapp.com.br
            </a>
          </p>
        </section>
  
        {/* Seção de Consentimento */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">6. Consentimento</h2>
          <p className="text-zinc-400">
            Ao enviar este formulário, você declara estar de acordo com os termos desta política de
            privacidade e consente com o armazenamento e o uso dos dados fornecidos conforme descrito
            acima.
          </p>
        </section>
  
        {/* Seção de Alterações */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">7. Alterações na Política de Privacidade</h2>
          <p className="text-zinc-400">
            Podemos atualizar esta política periodicamente. Notificaremos os usuários sobre alterações
            significativas por meio de e-mail ou no próprio site.
          </p>
        </section>
  
        {/* Seção de Contato */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">8. Contato</h2>
          <p className="text-zinc-400">
            Se você tiver dúvidas sobre esta política de privacidade ou sobre o uso de suas
            informações, entre em contato conosco pelo e-mail:{" "}
            <a href="mailto:contato@vgapp.com.br" className="text-blue-600 underline">
              contato@vgapp.com.br
            </a>
          </p>
        </section>
      </div>
    );
  }
  
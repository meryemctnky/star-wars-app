interface ErrorProps {
  message: string | null | undefined;
}

const Error: React.FC<ErrorProps> = ({
  message = 'An error has occurred.',
}) => {
  return (
    <div className='container mx-auto my-4 min-h-screen'>
      <div className='bg-upsdell text-white/90 p-4 rounded-md shadow-md'>
        Error: {message}
      </div>
    </div>
  );
};

export default Error;

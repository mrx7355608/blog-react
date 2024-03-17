export const SuccessAlert = ({ message }: { message: string }) => {
    return (
        <div role="alert" className="mb-4 alert alert-success">
            <span>{message}</span>
        </div>
    );
};

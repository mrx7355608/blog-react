import Spinner from "../main/Spinner";

interface IUnpublishButtonProps {
    isLoading: boolean;
    unPublish: () => void;
}
export default function UnpublishButton({
    unPublish,
    isLoading,
}: IUnpublishButtonProps) {
    return (
        <button
            className="btn btn-ghost bg-zinc-900 flex-1"
            onClick={unPublish}
        >
            {isLoading ? <Spinner /> : "Un-publish"}
        </button>
    );
}



export default function SnippetCards() {

    return (
        <div className="flex flex-col space-y-10 mb-10">

            <div className="text-2xl font-semibold ml-5">Snippets</div>

            {/* List of Snippets */}
            <div>
                <a href="https://gist.github.com/ghoshabhik/c5497682fd07eb627b3fbff3e8d5776b" rel="nofollow noreferrer" target="_blank"
                    className="pl-5"
                >
                    <div className="ml-5 w-64 px-4 py-3 text-sm bg-white rounded-md">Python Automation to clean up disk space Somthing a little longer</div>
                </a>
            </div>

            <div>
                <a href="https://gist.github.com/ghoshabhik/c5497682fd07eb627b3fbff3e8d5776b" rel="nofollow noreferrer" target="_blank"
                    className="pl-5"
                >
                    <div className="ml-5 w-64 px-4 py-3 text-sm bg-white rounded-md">Project 2: Python Automation to clean up disk space Somthing a little longer</div>
                </a>
            </div>

            <div>
                <a href="https://gist.github.com/ghoshabhik/c5497682fd07eb627b3fbff3e8d5776b" rel="nofollow noreferrer" target="_blank"
                    className="pl-5"
                >
                    <div className="ml-5 w-64 px-4 py-3 text-sm bg-white rounded-md">Project3: Python Automation to clean up disk space Somthing a little longer</div>
                </a>
            </div>

        </div>
    );
}
import * as React from 'react';
import LoadAnimation from './components/LoadAnimation';
import TpchDropdown from './components/TpchDropdown';
import StatusInput, { Status } from './components/StatusInput';
import KeybindButton from './components/KeybindButton';
import InfoModal from './components/InfoModal';
import KeybindModal from './components/KeybindModal';
import TargetTreeModal from './components/TargetTreeModal';
import Editor from './components/Editor';
import Graph from './content/Graph';
import { getData } from './content/TPCH';
import { treeData } from './content/tree/TargetTree';
import { setupLanguage } from './language/setup';
import { languageID } from './language/config';
import './App.css';

interface IAppProps {}

interface IAppState {
    loading: boolean;
    index: number;
    input: string;
    showInfoModal: boolean;
    showKeybindModal: boolean;
    showTargetTreeModal: boolean;
}

/**
 * App:
 * Main component
 */
class App extends React.Component<IAppProps, IAppState> {
    private data: Graph[] = [];
    private editor: Editor | null = null;
    private inputElement: StatusInput | null = null;
    private buttonElement: KeybindButton | null = null;
    private ifModalElement: InfoModal | null = null;
    private ttModalElement: TargetTreeModal | null = null;

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            loading: true,
            index: 0,
            input: '',
            showInfoModal: false,
            showKeybindModal: false,
            showTargetTreeModal: false,
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.nextTpchQuery = this.nextTpchQuery.bind(this);
        this.prevTpchQuery = this.prevTpchQuery.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeydown = this.handleInputKeydown.bind(this);
        this.passInput = this.passInput.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.resetStatus = this.resetStatus.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.displayInfoModal = this.displayInfoModal.bind(this);
        this.buildInfoModal = this.buildInfoModal.bind(this);
        this.displayKeybindModal = this.displayKeybindModal.bind(this);
        this.displayTargetTreeModal = this.displayTargetTreeModal.bind(this);
        this.buildTargetTreeModal = this.buildTargetTreeModal.bind(this);
        this.closeModals = this.closeModals.bind(this);
    }

    //--------------------------------------------------
    //-----TPC-H Dropdown-----
    //--------------------------------------------------

    public handleDropdownChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let index = parseInt(event.target.value);
        this.setState({
            index,
            input: '',
        });
        this.resetStatus();
        if (this.editor) this.editor.getInstance().focus();
    }

    public nextTpchQuery() {
        let index = this.state.index < this.data.length - 1 ? this.state.index + 1 : 0;
        this.setState({ index });
    }

    public prevTpchQuery() {
        let index = this.state.index > 0 ? this.state.index - 1 : this.data.length - 1;
        this.setState({ index });
    }

    //--------------------------------------------------
    //-----Status Input-----
    //--------------------------------------------------

    public handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ input: event.target.value });
    }

    public handleInputKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.editor && this.inputElement) {
                this.editor.getInstance().focus();
                if (this.inputElement.getStatus() === Status.COMMENT) this.editor.handleKeypressComment();
                else if (this.inputElement.getStatus() === Status.RENAME) this.editor.handleKeypressRename();
                else if (this.inputElement.getStatus() === Status.SEARCH) this.editor.handleKeypressSearch();
                this.resetStatus();
            }
        }
    }

    public passInput(input: string) {
        this.setState({ input });
    }

    public focusInput(status: Status, prev?: string) {
        if (this.inputElement) {
            this.inputElement.setStatus(status);
            this.inputElement.getInstance().focus();
            if (status === Status.SEARCH) this.setState({ input: '' });
            if (status === Status.COMMENT) this.setState({ input: prev ? prev : '' });
            if (status === Status.RENAME) this.setState({ input: prev ? prev : '' });
        }
    }

    public resetStatus() {
        if (this.inputElement) this.inputElement.setStatus(Status.NODE);
    }

    //--------------------------------------------------
    //-----Keybind Button-----
    //--------------------------------------------------

    public handleButtonPress() {
        if (this.editor) {
            this.editor.getInstance().focus();
            this.editor.handleKeypressToggleKeybinds();
        }
    }

    public toggleButton() {
        if (this.buttonElement) this.buttonElement.toggle();
    }

    //--------------------------------------------------
    //-----Manage Modals-----
    //--------------------------------------------------

    public displayInfoModal() {
        this.setState({
            showInfoModal: !this.state.showInfoModal,
            showKeybindModal: false,
            showTargetTreeModal: false,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public buildInfoModal(data: string[]) {
        if (this.ifModalElement) this.ifModalElement.setData(data);
    }

    public displayKeybindModal() {
        this.setState({
            showInfoModal: false,
            showKeybindModal: !this.state.showKeybindModal,
            showTargetTreeModal: false,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public displayTargetTreeModal() {
        this.setState({
            showInfoModal: false,
            showKeybindModal: false,
            showTargetTreeModal: !this.state.showTargetTreeModal,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public buildTargetTreeModal(data: treeData | null) {
        if (this.ttModalElement) this.ttModalElement.setData(data);
    }

    public closeModals() {
        this.setState({
            showInfoModal: false,
            showKeybindModal: false,
            showTargetTreeModal: false,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public async componentDidMount() {
        this.data = await getData();
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) return <LoadAnimation />;
        setupLanguage();
        let dropdown = (
            <TpchDropdown
                size={this.data.length}
                index={this.state.index}
                onDropdownChange={this.handleDropdownChange}
            />
        );
        let input = (
            <StatusInput
                input={this.state.input}
                onInputChange={this.handleInputChange}
                onInputKeydown={this.handleInputKeydown}
                ref={(ref) => (this.inputElement = ref)}
            />
        );
        let button = <KeybindButton onButtonPress={this.handleButtonPress} ref={(ref) => (this.buttonElement = ref)} />;
        let ifModal = (
            <InfoModal
                showModal={this.state.showInfoModal}
                onModalClick={this.displayInfoModal}
                ref={(ref) => (this.ifModalElement = ref)}
            />
        );
        let kbModal = <KeybindModal showModal={this.state.showKeybindModal} onModalClick={this.displayKeybindModal} />;
        let ttModal = (
            <TargetTreeModal
                showModal={this.state.showTargetTreeModal}
                onModalClick={this.displayTargetTreeModal}
                ref={(ref) => (this.ttModalElement = ref)}
            />
        );
        let editor = (
            <Editor
                language={languageID}
                graph={this.data[this.state.index]}
                input={this.state.input}
                nextTpchQuery={this.nextTpchQuery}
                prevTpchQuery={this.prevTpchQuery}
                passInput={this.passInput}
                focusInput={this.focusInput}
                resetStatus={this.resetStatus}
                toggleButton={this.toggleButton}
                displayInfoModal={this.displayInfoModal}
                buildInfoModal={this.buildInfoModal}
                displayKeybindModal={this.displayKeybindModal}
                displayTargetTreeModal={this.displayTargetTreeModal}
                buildTargetTreeModal={this.buildTargetTreeModal}
                closeModals={this.closeModals}
                ref={(ref) => (this.editor = ref)}
            />
        );
        return (
            <div>
                <div className="ui">
                    {dropdown}
                    {input}
                    {button}
                </div>
                {ifModal}
                {kbModal}
                {ttModal}
                {editor}
            </div>
        );
    }
}

export default App;

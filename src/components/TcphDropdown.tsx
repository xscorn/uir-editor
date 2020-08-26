import React from 'react';

interface ITcphDropdownProps {
    size: number;
    index: number;
    onDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * TcphDropdown:
 * Dropdown for the TCP-H queries
 */
class TcphDropdown extends React.Component<ITcphDropdownProps> {
    renderOptions() {
        let options: JSX.Element[] = [];
        for (let i = 0; i < this.props.size; i++)
            options.push(
                <option key={i} value={i}>
                    TCP-H {i + 1}
                </option>,
            );
        return options;
    }

    render() {
        return (
            <select
                id="tcphDropdown"
                className="dropdown"
                value={this.props.index}
                onChange={this.props.onDropdownChange}
            >
                {this.renderOptions()}
            </select>
        );
    }
}

export default TcphDropdown;

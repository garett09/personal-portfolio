import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="w-screen flex flex-nowrap justify-between items-center py-2 bg-ub-grey text-ubt-grey">
                <span>Whatever</span>
                <span>Mon Aug 23 11:00 PM</span>
                <div className="wsb">
                    <span>w</span>
                    <span>s</span>
                    <span>b</span>
                </div>
            </div>
        )
    }
}